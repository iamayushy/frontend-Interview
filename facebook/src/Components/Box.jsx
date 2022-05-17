import { useState } from "react"

const Box = ({comment}) => {
    const [visible, setVisible] = useState(false)
    if(comment.reply){
    return(
        <div className="card" style={{borderLeft: visible ? '6px solid goldenrod':''}}>
            <section className="comment">
                {visible === false ? <span onClick={() => setVisible(!visible)} className="sp">+</span>: ''}
                <h3 style={{color:'gold'}}>{comment.author}</h3>
                <h4>{comment.body}</h4>
                <span style={{color:'green'}}>{comment.timestamp}</span>

                <section className="act">
                    <p onClick={() => setVisible(!visible)} className="reply">{visible?'Close' :'Replies'}</p>

                    <div style={{paddingLeft:'10px', display: visible ? 'block':'none'}}>
                        {comment.replies.map(ele => {
                           return  <Box comment={ele}/> 
                        })}
                    </div>
                </section>

                
            </section>
        </div>
    )}
    else{
        return(
        <div className="comment">
            <h3 style={{color:'gold'}}>{comment.author}</h3>
             <h4>{comment.body}</h4> 
        
        </div>)
    }
}
export {Box}