import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={{padding: 20, paddingTop: 50}}>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <div className="weui-cells__title">添加todolist：</div>
        <div className="weui-cell weui-cell_vcode">
          <div className="weui-cell__bd">
            <input
              className="weui-input"
              type="text"
              placeholder="请输入todo任务"
              ref={node => {
                input = node
              }} />
          </div>
          <div className="weui-cell__ft">
            <button type="submit" className="weui-btn weui-btn_mini weui-btn_primary">添加</button>
          </div>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo