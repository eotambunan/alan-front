import LocalDiningIcon from '@mui/icons-material/LocalDining';


const Navbar = ()=>{
    return(
        <div className="h-16 bg-blue-400 flex items-center pl-40 sticky top-0">
            <LocalDiningIcon className='text-white'/>
            <h1 className="text-white text-2xl ml-4">Alan Resto</h1>
        </div>
    )
}

export default Navbar