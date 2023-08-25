import Image from "next/image"
import loading from '../img/loading.svg'

export default function Loading() {
  return (
    <> 
      <Image style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        gridArea: 'section',
        height : '100%'
      }} src={loading} alt={"Loading"}>

      </Image>
    </>
  )
}