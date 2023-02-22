import './header.css'

const Header = ({formik})=> {
    return(
        <header className="header">
            <p className="header-title">Images search</p>
            <form className="header-form" onSubmit={formik.handleSubmit}>
                <input type='text' {...formik.getFieldProps('search')} className="header-search" />
            </form>
        </header>
    )
}

export default Header