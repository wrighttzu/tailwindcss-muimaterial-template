import { Slider } from "@mui/material";

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline justify-center flex">
      Hello world!
    </h1>
    <Slider defaultValue={30} />
    <Slider defaultValue={30} />
    </>
  )
}