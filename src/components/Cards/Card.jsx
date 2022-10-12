import React from 'react'
import {data} from '../../assets/data'
import "./Card.css"

const Card = () => {
	return(
		<div  className='container'>
			{data.map((item)=>{
				const {id,title,image,desc}=item;
				return(
					<div key={id} className='card'>
						<div className='head'><h1>{title}</h1></div>
						<img src={image} width={340} alt="img" />
						<div className='description'><p>{desc}</p></div>

					</div>
				)
			})}

		</div>
	)


// 	return(
// 	{data.map((item)=>{
// 		const {id,title,img,desc}=item
// 		return(
// 			<div key={id} className='card'>
// 				<div className='head'><h1>{title}</h1></div>
// 				<img className='image' src={img} alt="" />
// 				<div className='description'><p>{desc}</p></div>
// 			</div>
// 		)
// 	})}
//  )
}

export default Card