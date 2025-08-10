import './css/App.css'

function App(){
    return(
        <>
        <h1> App </h1>
        <Person></Person>
        <Student/>
        <Developer/>
        <Device name="Pc" price='70k'></Device>
        <Ipaddress pub='22222' pri ='1111'></Ipaddress>
        <Ipaddress></Ipaddress>
        <Webpage page={{home:'homepage',land:'landpage'}}></Webpage>
        </>
    )
}
function Person(){
    // const age = 22;
    // const name = "apps";
    // return <h3>I am {name} with age:{age}</h3>
    const person ={
        name:'apps',
        age:22
    }
    return <h3>I am {person.name} with age {person.age}</h3>
}

function Student(){
    return(
        <div className ='student'> 
            <p>I am a Student</p>
        </div>
    )//class is reserved keyword so avoid
}

function Developer(){
    const DeveloperStyle = {
        margin: '20px',
        padding: '20px',
        border: '2px solid purple',
        borderRadius:'20px'
    }
    return(
        <div style={DeveloperStyle}>
            <h4>I am a developer</h4>
        </div>
    )
    //  return(
    //     <div style={{
    //     margin: '20px',
    //     padding: '20px',
    //     border: '2px solid purple',
    //     borderRadius:'20px'
    // }}>
    //         <h4>I am a developer</h4>
    //     </div>
    // )

}
// parent components pass data to child comp through props
function Device(props){
    console.log(props);//{name:'Pc',price:'70k'}
    return <h2> this device:{props.name}</h2>
}

//public and private are reserved words don't use
function Ipaddress({pub = 0,pri = 0}){
    return <h5> Public Ip address is: {pub}, private Ip address is: {pri} </h5>
}

function Webpage(page){
    //console.log(page);{page:{page{home:'homepage',land:'landpage'}}}
    return(
       <div><h3>It's a : {page.page['home']} or a: {page.page.land}</h3></div> 
    )
}
// function Webpage(props){
//     const page = props.page;
//     return(
//        <div><h3>It's a : {page['home']} or a: {page.land}</h3></div> 
//     )
// }
export default App;