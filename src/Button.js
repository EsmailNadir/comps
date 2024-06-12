import index from "./index.css"
import classnames from "classnames"

const FinalClassName = classnames({
    "bg-blue-500":true
});
console.log(FinalClassName);
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}){
    const classes = classnames("px-3 py-1.5 border",{
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        
    })
    return <button className={classes}>{children}</button>
}
Button.propTypes = {
CheckVariationValue:({primary,secondary,success,warning,danger}) => {
const count = Number(!!primary)
    + Number(!! secondary)
    + Number(!! warning)
    + Number(!! success)
    + Number(!! danger)
    if (count > 1){
        return new Error("only one of primary,secondary,success,warning,danger")
    }
}
}

export default Button;