export const SET_INIT = "resto-solutions.local:setInit"

export function setInit(val) {
  return {
    type: SET_INIT,
    payload: val
  }
}