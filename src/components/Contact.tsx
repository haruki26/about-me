import { FC } from "react";
import PageFrame from "./PageFrame";
import ContactHead from "./headerComponents/ContactHead";
import ContactMain from "./mainComponents/ContactMain";

const Contact: FC = () => {
    return (
        <PageFrame>
            <ContactHead />
            <ContactMain />
        </PageFrame>
    );
}

export default Contact;