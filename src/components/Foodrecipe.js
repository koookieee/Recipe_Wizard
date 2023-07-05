import React from 'react'
import "../styles.scss"

const Foodrecipe = ({title,cals,image,ingredients,type}) => {
  return (
    // <div className='food--div'>
    //   <h1 classname="food--name">{title}</h1>
    //   <h2 className='food--cal'>{cals}</h2>
    //   <img src={image} alt='food' className='food--img'></img>
    //   <ol className='food--list'>
    //     {ingredients.map(steps =>(
    //         <li>{steps.text}</li>
    //     ))}
    //   </ol>

    // </div>
<div className='encl'>
<div className="card">
   <div className="header">
   <img src={image} alt='food' className='food--img' ></img>
      
   </div>
   <div className="text">
      <h1 className="food">
         {title}
      </h1>
      <i className="fa fa-clock-o"> Calories : {cals} Cals</i>
      <i className="fa fa-users"> Cusine : {type} </i>
      
      <p className="info">
      <ol className='food--list'>
        {ingredients.map(steps =>(
            <li>{steps.text}</li>
        ))}
      </ol>
      </p>
   </div>
   <a href="#" className="btn">Let's Cook!</a>
</div>
</div>




  )
}

export default Foodrecipe
