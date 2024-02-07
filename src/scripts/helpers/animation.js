export const ease = "power4.inOut";
export const expo = "expo.inOut";

export const tlProp = (prop, immediate = true, resetValue = 0) =>
	immediate ? resetValue : prop;
