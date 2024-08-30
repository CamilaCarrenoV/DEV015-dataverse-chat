import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Desarrolla el test correspondiente aquí
    const fakeApi = "123456";
    localStorage.setItem("apiKey", fakeApi);
    const result = getApiKey();
    expect(result).toBe(fakeApi);
  });

  it("devolver null si no hay API Key en localStorage", () => {
    localStorage.removeItem("apiKey");
    const result = getApiKey();
    expect(result).toBeNull();
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    // Desarrolla el test correspondiente aquí
    const anotherFakeApi = "67890";
    setApiKey(anotherFakeApi);
    expect(localStorage.getItem("apiKey")).toBe(anotherFakeApi);
  });
});
