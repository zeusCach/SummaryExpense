
import Account from "../components/ConfigurationUI/Account";
import Password from "../components/ConfigurationUI/Password";
import Danger from "../components/ConfigurationUI/Danger";


export default function Configuration() {


    return (
        <>
            <div className="container mx-auto max-w-4xl px-5 py-10">
                <Account />
                <Password />
                <Danger />
            </div>

        </>
    )
}