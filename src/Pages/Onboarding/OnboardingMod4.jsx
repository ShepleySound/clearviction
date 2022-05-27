import { useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Theme from '../../Components/Theme';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';

// Components 
import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

import boat from '../../Assets/Onboarding/boat.svg';
import question from '../../Assets/Onboarding/question.svg';
import venn from '../../Assets/Onboarding/venn.svg';
import group from '../../Assets/Onboarding/group.svg';
import scrum from '../../Assets/Onboarding/scrum.svg';
import marketing from '../../Assets/Onboarding/marketing.svg';
import nemo from '../../Assets/Onboarding/nemo.svg';
import product from '../../Assets/Onboarding/product.svg';
import research from '../../Assets/Onboarding/research.svg';


const headerText =  {
    title: "Module 4",
    description: "Now what?",
};

const teamNemo = {
    title: "You are on team Nemo",
    paragraph1: "Click below to see a little more what that is, and what that means:",
    linkTitle: "Guidance",
    linkIcon: "doc",
    linkLocation: "",
}

const team = {
    title: "How to join other teams",
    paragraph1: "Better to reliably and consistently show to one than dabble in more than one:",
    linkTitle: "Guidance",
    linkIcon: "doc",
    linkLocation: "",
}

const questions = {
    title: "Any questions?",
    paragraph1: "Ask your onboarding buddy. Need a buddy? Ping Seamus to get one.",
}

const doing = {
    title: "See what the teams are doing",
    linkTitle: "Airtable teams list",
    linkIcon: "doc",
    linkLocation: "https://airtable.com/appfJZShN8K4tcWHU/tblln6jlsrsqfU0TO/viwrhv3vIo3LqHezH?blocks=hide",
}

const button1 = {
    link: "/onboarding-mod3",
    text: "previous"
}

const button2 = {
    link: "/onboarding",
    text: "back to homepage"
}

function OnboardingMod4() {
    const classes = useModuleContentStyles();
    return (
        <div>{console.log('mod4')}
            <Header text={headerText} />
            <Box >
                <Grid container justifyContent="center" >
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={boat} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={teamNemo} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={venn} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={team} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={question} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={questions} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={group} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={doing} />
                    </Grid>
                </Grid>
            </Box>

            {/* Change to team pics */}
            <div id="team" style={{ marginBottom: Theme.spacing(5) }}>
                <Grid container spacing={2} style={{
                    display: "flex", 
                    flexDirection: "row", 
                    margin: "auto", 
                    justifyContent: "space-around", 
                    textAlign: "center", 
                    padding: "0 50px",
                    maxWidth: "77vw",
                    [Theme.breakpoints.down("sm")]: {
                       padding: "0 40px",
                    }
                }}>
                    <Grid item xs={8} sm={6} md={3} lg={2}>
                        <img src={scrum} alt="Scrum Team Icon"/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={marketing} alt="Marketing Team Icon"/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={nemo} alt="Nemo Team Icon"/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={product} alt="Product Team Icon"/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={research} alt="User Reasearch Team Icon"/>
                    </Grid>
                </Grid>
            </div>

            <Footer button1={button1} button2={button2} />

        </div>
    );
}

export default OnboardingMod4;