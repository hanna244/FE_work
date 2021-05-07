import { Button, CategoryCheckbox } from 'components'
import React from 'react'
import {
  modalContainer,
  modalHead,
  modalCheckboxContainer,
  modalSaveButton,
  modalCloseButton,
} from './Modal.module.scss'

const Modal = ({ categoryLabel, ...propTypes }) => {
  return (
    <div className={modalContainer} {...propTypes}>
      <h2 className={modalHead}>필터</h2>
      <div className={modalCheckboxContainer}>
        <CategoryCheckbox label={categoryLabel} />
        <CategoryCheckbox label={categoryLabel} />
        <CategoryCheckbox label={categoryLabel} />
      </div>
      <Button className={modalSaveButton} label="저장하기" />
      <button
        className={modalCloseButton}
        aria-label="닫기 버튼"
        type="button"
      />
    </div>
  )
}

Modal.defaultProps = {
  categoryLabel: '카테고리 이름',
}

export default Modal
