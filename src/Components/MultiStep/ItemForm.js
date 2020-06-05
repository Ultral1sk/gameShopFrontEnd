import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
    <div>
        {type === "text" ? (
            <div className="stepBlock">
                <label>{label}</label>
                <input type={type} {...otherProps} />
            </div>
        ) : (
                <>
                    <label />
                    <input type={type} {...otherProps} />
                    {label}
                </>
            )}
    </div>
);

export default ItemForm;
