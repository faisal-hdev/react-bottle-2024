/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
