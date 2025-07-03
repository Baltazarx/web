import Layout from "@/components/layout/Layout"
import Cta1 from "@/components/sections/Cta1"
import Pagetitle1 from "@/components/sections/Pagetitle1"
import Partner1 from "@/components/sections/Partner1"
import Project1 from "@/components/sections/Project1"
import Project21 from "@/components/sections/Project21"
import Project31 from "@/components/sections/Project31"
import Project4 from "@/components/sections/Project4"
import Team1 from "@/components/sections/Team1"
import Token1 from "@/components/sections/Token1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Pagetitle1 />
                <Project1 />
                <Project21 />
                <Project31 />
                <Token1 />
                <Project4 />
                <Team1 />
                <Partner1 />
                <Cta1 />
            </Layout>
        </>
    )
}