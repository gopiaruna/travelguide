import './index.css'

const returnObj = data => ({
  id: data.id,
  imgUrl: data.image_url,
  name: data.name,
  description: data.description,
})

const ListItem = props => {
  const {listDetails} = props
  const listX = returnObj(listDetails)
  const {description, imgUrl, name} = listX
  return (
    <li className="list-items">
      <img src={imgUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default ListItem
