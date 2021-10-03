import { useSelector } from 'react-redux'

function Admin() {
  const store = useSelector(store => store)

  console.log(store)

  return (
    <>
      <h2>đây là trang admin</h2>
    </>
  )
}

export default Admin
