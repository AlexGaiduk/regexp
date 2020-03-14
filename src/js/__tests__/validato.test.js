import { Validator } from "../validator";

const checkName = new Validator();

test("name is available", () => {
    expect(checkName.validateUsername("Will")).toEqual(true);
    expect(checkName.validateUsername("Willy")).toEqual(true);
    expect(checkName.validateUsername("WILL")).toEqual(true);
})

test("name unavailable", () => {
    expect(checkName.validateUsername("W_1_L_L")).toEqual(false);
    expect(checkName.validateUsername("WI_11_Hell_m")).toEqual(false);
    expect(checkName.validateUsername("_-wIIl-_")).toEqual(false);
})

