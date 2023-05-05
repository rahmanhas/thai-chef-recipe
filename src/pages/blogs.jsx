import React from 'react';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
//import "./styles.css";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
};
// import html2pdf from 'html2pdf.js';


// function saveAsPDF() {
//     const element = document.getElementById('my-div');
//     html2pdf()
//       .from(element)
//       .save();
//   }

const Blogs = () => {
    return (

        <div>
            <h2 className='text-2xl lg:text-6xl font-extrabold text-green-700 my-6'>Blogs</h2>
            {/* <button onClick={saveAsPDF} className='btn btn-primary border-0 bg-green-700 hover:bg-green-900'>Generate PDF</button> */}

            <Pdf targetRef={ref} filename="blog.pdf" options={options}>
                {({ toPdf }) => <button onClick={toPdf} className='btn bg-green-700 hover:bg-green900'>Generate Pdf</button>}
            </Pdf>

            <div ref={ref} id='my-div' className='grid lg:grid-cols-2 gap-4 justify-center items-center mx-auto rounded-2xl w-full bg-green-50'>
                <div className=" w-96 bg-base-100 shadow-xl lg:h-[350px] max-h-fit mx-auto my-6 border-2 border-green-700 rounded-xl p-2">
                    <div className="">
                        <h2 className="font-bold">Q-1: Tell us the differences between uncontrolled and controlled components?</h2>
                        <p>Ans-1: The primary difference between a controlled component vs an uncontrolled component is related to how they handle their value. Uncontrolled components pass down the value through props. In contrast, controlled components use state to handle the value internally. For most use cases, controlled components are the best option in code.</p>
                    </div>
                </div>
                <div className=" w-96 bg-base-100 shadow-xl lg:h-[350px] max-h-fit mx-auto my-6 border-2 border-green-700 rounded-xl p-2">
                    <div className="">
                        <h2 className="font-bold">Q-2: How to validate React props using PropTypes?</h2>
                        <p>Ans-2: Props and PropTypes are important mechanisms for passing read-only attributes between React components. We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app. Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes.If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className=" w-96 bg-base-100 shadow-xl lg:h-[350px] max-h-fit mx-auto my-6 border-2 border-green-700 rounded-xl p-2">
                    <div className="">
                        <h2 className="font-bold">Q-3: Tell us the difference between nodejs and express js?</h2>
                        <p>Ans-3: Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</p>
                    </div>
                </div>
                <div className=" w-96 bg-base-100 shadow-xl lg:h-[350px] max-h-fit mx-auto my-6 border-2 border-green-700 rounded-xl p-2">
                    <div className="">
                        <h2 className="font-bold">Q-4: What is a custom hook, and why will you create a custom hook?</h2>
                        <p>Ans-4: Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve. Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;