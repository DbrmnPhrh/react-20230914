import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/entities/request/selectros";

export function useMakeRequest(thunk) {
  const request = useRef();

  const requestStatus = useSelector((state) => selectRequestStatus(state, request.current?.requestId));

  const dispatch = useDispatch();

  const makeRequest = useCallback(([...params]) => {
    request.current = dispatch(thunk([...params]));
  }, [dispatch, thunk]);

  return [requestStatus, makeRequest];
}
