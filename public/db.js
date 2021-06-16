let db;
let hearthVersion;

// Create a new db request for a "budget" database.
const request = indexedDB.open("HearthDB", hearthVersion || 2);

request.onupgradeneeded = function (e) {
  console.log("Upgrade needed in IndexDB");

  const { oldVersion } = e;
  const newVersion = e.newVersion || db.version;

  console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);

  db = e.target.result;

  if (db.objectStoreNames.length === 0) {
    db.createObjectStore("HearthStore", { autoIncrement: true });
  }
};

request.onerror = function (e) {
  console.log(`There is an error: ${e.target.errorCode}`);
};

function checkDatabase() {
  console.log("check db invoked");

  // Open a transaction on your HearthStore db
  let transaction = db.transaction(["HearthStore"], "readwrite");

  // access your HearthStore object
  const store = transaction.objectStore("HearthStore");

  // Get all records from store and set to a variable
  const getAll = store.getAll();

  // If the request was successful
  getAll.onsuccess = function () {
    // If there are items in the store, we need to bulk add them when we are back online
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          // If our returned response is not empty
          if (res.length !== 0) {
            // Open another transaction to HearthStore with the ability to read and write
            transaction = db.transaction(["HearthStore"], "readwrite");

            // Assign the current store to a variable
            const currentStore = transaction.objectStore("HearthStore");

            // Clear existing entries because our bulk add was successful
            currentStore.clear();
            console.log("Clearing store 🧹");
          }
        });
    }
  };
}

request.onsuccess = function (e) {
  console.log("success");
  db = e.target.result;

  // Check if app is online before reading from db
  if (navigator.onLine) {
    console.log("Backend online! 🗄️");
    checkDatabase();
  }
};

const saveRecord = (record) => {
  console.log("Save record invoked");
  // Create a transaction on the HearthStore db with readwrite access
  const transaction = db.transaction(["HearthStore"], "readwrite");

  // Access your HearthStore object store
  const store = transaction.objectStore("HearthStore");

  // Add record to your store with add method.
  store.add(record);
};

// Listen for app coming back online
window.addEventListener("online", checkDatabase);
