import React, { Component } from 'react'
interface State{
    name:string
}
interface Props{

}
export default class Class extends Component<Props,State> {
    constructor (props:Props){
        super(props)
        this.state={
            name:"minh thu"
        }
    }
    //nơi khai báo các tên phương thức
    handleClick=(){
        console.log("đã gọi vào hàm Click");
        //đối với class Component khi muốn cập nhật State thì dùng setState
        this.setState({
            name:"minh hà"
        })
        
    }
  render() {
    return (
      <div>Class
        <p>xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
