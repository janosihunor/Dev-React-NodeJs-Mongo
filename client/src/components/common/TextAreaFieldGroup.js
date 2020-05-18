import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-controls-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="from-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextAreaFieldGroup.protoTypes = {
  name: PropTypes.string.isReguired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isReguired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isReguired,
};

export default TextAreaFieldGroup;
