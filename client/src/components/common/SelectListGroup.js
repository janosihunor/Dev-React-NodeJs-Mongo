import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectoptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-controls-lg", {
          "is-invalid": error,
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectoptions}
      </select>
      {info && <small className="from-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
SelectListGroup.protoTypes = {
  name: PropTypes.string.isReguired,
  value: PropTypes.string.isReguired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isReguired,
  options: PropTypes.array.isRequired,
};

export default SelectListGroup;
