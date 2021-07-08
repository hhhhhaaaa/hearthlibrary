import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.formErrors
 */
function SubmitFormErrors({ formErrors }) {
  console.log(formErrors);

  if (formErrors.length === 1) {
    return (
      <div>
        <h3>{formErrors}</h3>
      </div>
    );
  }

  return (
    <div className="formErrors">
      {formErrors.map((fieldName, index) => {
        if (formErrors.length > 0) {
          return (
            <h3 key={index}>
              {fieldName} {formErrors[fieldName]}
            </h3>
          );
        }

        return "";
      })}
    </div>
  );
}

SubmitFormErrors.propTypes = {
  formErrors: PropTypes.array
};

export default SubmitFormErrors;
