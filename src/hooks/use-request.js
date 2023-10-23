import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/entities/request/selectros";

export const useRequest = (thunk, ...params) => {

  const request = useRef();

  const requestStatus = useSelector((state) => selectRequestStatus(state, request.current?.requestId));

  const dispatch = useDispatch();

  useEffect(() => {
    request.current = dispatch(thunk(...params));

    return () => {
      request.current.abort();
      request.current = null;
    }

  }, [thunk, ...params]);


  return requestStatus;
}
