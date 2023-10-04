import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector('#modal');

export const Modal = ({open, onClose, children}) => {

  const element = useMemo(() => document.createElement("div"), []);

  const handlerCheckTarget = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      }
    }
  });

  if (open) {
    return createPortal(
      <div className={classNames('modal_background')} onClick={handlerCheckTarget}>
        <div className={classNames('modal_card')}>{children}</div>
      </div>
    , element);
  } else {
    return null;
  }
}
