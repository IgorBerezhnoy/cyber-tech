import React, {
  ChangeEvent,
  DetailedHTMLProps,
  DragEvent,
  InputHTMLAttributes,
  memo,
  useRef,
  useState,
} from 'react'

import CloudIcon from '@/assets/icons/cloudIcon'
import CrossIcon from '@/assets/icons/crossIcon'
import FileIcon from '@/assets/icons/fileIcon'
import { formatDate } from '@/utils/formatDate'
import {
  COLOR_GRAY,
  COLOR_GRAY_LIGHT,
  COLOR_RED,
  COLOR_WHITE,
  FONT_WEIGHT_MEDIUM_PLUS,
  FONT_WEIGHT_NORMAL,
  FONTSIZE_M,
  LINE_HEIGHT_M,
} from '@/variables'
import styled from 'styled-components'

import './index'

export type InputFileProps = {
  errorMessage?: string
  label?: React.ReactNode
  labelOutside?: React.ReactNode
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export const InputFile = memo(
  ({ errorMessage, label, labelOutside, onChange, value, ...rest }: InputFileProps) => {
    const [file, setFile] = useState<File | undefined>(undefined)
    const [date, setDate] = useState<string>('')
    const [error, setError] = useState<string>('')
    const fileInputRef = useRef(null)
    const setFileHandler = (file: File) => {
      setError('')
      if (file.size > 5 * 1024 * 1024) {
        setError('Файл слишком большой')

        return
      }
      if (file.type !== 'application/pdf') {
        setError('Только pdf')

        return
      }
      setFile(file)
      setDate(formatDate(file.lastModified))
    }
    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (!e.target.files) {
        return
      }
      const file = e.target.files[0]

      if (file) {
        setFileHandler(file)
      }
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (!e.dataTransfer.files) {
        return
      }
      const file = e.dataTransfer.files[0]

      if (file) {
        setFileHandler(file)
      }
    }

    const deleteFileHandler = () => setFile(undefined)

    const handleLabelClick = (e: React.KeyboardEvent) => {
      const current = fileInputRef.current as HTMLInputElement | null

      if (!current) {
        return
      }
      if (e.key === 'Enter' || e.key === ' ') {
        current.click()
      }
    }

    return (
      <div>
        {labelOutside && <LabelOutSide>{labelOutside}</LabelOutSide>}
        {file ? (
          <WrapperWithFile>
            <IconWithText>
              <FileIcon />
              {file?.name}
            </IconWithText>
            <IconWithText>
              {date}
              <IconButton onClick={deleteFileHandler}>
                <CrossIcon />
              </IconButton>
            </IconWithText>
          </WrapperWithFile>
        ) : (
          <Wrapper
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onKeyDown={handleLabelClick}
            tabIndex={0}
          >
            <Icon />
            {label && <Label htmlFor={rest.id}>{label}</Label>}
            <File
              accept={'.pdf'}
              onChange={handleFileUpload}
              ref={fileInputRef}
              type={'file'}
              value={file}
              {...rest}
            />
          </Wrapper>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    )
  }
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${COLOR_GRAY_LIGHT};
  padding: 8px 0;
`
const LabelOutSide = styled.div`
  font-size: ${FONTSIZE_M};
  line-height: ${LINE_HEIGHT_M};
  color: ${COLOR_GRAY};
  font-weight: ${FONT_WEIGHT_MEDIUM_PLUS};
  margin-bottom: 4px;
`
const Label = styled.label`
  font-weight: ${FONT_WEIGHT_NORMAL};
  font-size: ${FONTSIZE_M};
  line-height: ${LINE_HEIGHT_M};
  text-align: center;
  cursor: pointer;
  color: ${COLOR_GRAY};
`
const File = styled.input`
  display: none;
`
const Icon = styled(CloudIcon)`
  margin-bottom: 13px;
`
const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0 0 0 8px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    svg {
      fill: #9f3834ff;
    }
  }
`
const IconWithText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`
const WrapperWithFile = styled.div`
  padding: 12px 16px;
  background: ${COLOR_WHITE};
  border-radius: 8px;
  color: ${COLOR_GRAY};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ErrorMessage = styled.div`
  margin-top: 8px;
  font-size: ${FONTSIZE_M};
  color: ${COLOR_RED};
  line-height: ${LINE_HEIGHT_M};
`
