import { Link } from "react-router-dom";
import Container from "../../Container/Container";

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <div className="navbar text-montserrat">
                    <Link to='/' className="flex gap-[14px] items-center">
                        <div className="w-6 h-6 rounded bg-gradient-to-r from-[#17EAD9] to-[#6078EA] rotate-45"></div>
                        <h2 className="text-[#6078EA] text-2xl font-bold">Job Task</h2>
                    </Link>
                </div>
            </Container>
        </div>


    );
};

export default Navbar;