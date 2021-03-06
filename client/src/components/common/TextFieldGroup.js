import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-controls-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="from-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextFieldGroup.protoTypes = {
  name: PropTypes.string.isReguired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isReguired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isReguired,
  onChange: PropTypes.func.isReguired,
  disabled: PropTypes.string,
};
TextFieldGroup.defaultProps = {
  type: "text",
};
export default TextFieldGroup;
