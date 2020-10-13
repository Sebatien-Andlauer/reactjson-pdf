import React from "react";
import PostData from '../data/files.json';
import Pdf from "react-to-pdf";

const ref = React.createRef();
export default function Home() {
  
  return (
    <div ref={ref}>
      {PostData.map((PostDetail, index)=> {
        return <div>
          <h2>{PostDetail.title}</h2>
          <p>{PostDetail.content}</p>
        </div>
      })}
      <Pdf targetRef={ref} filename="post.pdf">
        {({toPdf}) => <button onClick={toPdf}>Exporter en PDF</button>}
      </Pdf>
    </div>
  );
}