import { FaPhone } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"

export const ICON_LINKS = [
    {
        id: 1,
        child: (
            <>
            <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto:jordyscleaningserviceky@gmail.com",
        text: "jordyscleaningserviceky@gmail.com",
        style: '',
    },
    {
        id: 2,
        child: (
            <>
                <FaPhone size={20} />
            </>
        ),
        href: "tel:859 221 8828",
        text: "(859) 221-8828",
        style: ""
    },
]
