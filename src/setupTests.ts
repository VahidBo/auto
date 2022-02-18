// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

const localStorageMock = (function () {
  let store: { [key: string]: string } = {};
  const getItem = (k: string) => store?.[k] || null;
  const setItem = (k: string, value: string) => (store[k] = value);
  const removeItem = (k: string) => delete store[k];
  const clear = () => (store = {});
  const key = (n: number) => null;
  const length = 0;
  return { getItem, setItem, removeItem, clear, key, length };
})();

global.localStorage = localStorageMock;
