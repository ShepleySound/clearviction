import { Grid, Link, List, ListItem } from "@material-ui/core";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";
import { adultLegalAid, juvenileLegalAid, proSePatronsLegalAid } from "../../data/resourcesData";

const aidFacts = [
    {
        id: "af0",
        summary: "Assistance for Pro Se Patrons",
        content: (
            <List>
                {proSePatronsLegalAid.map(resource => (
                    <ListItem key={resource.name}>
                        <Link target="_blank" rel="noopener noreferrer" href={resource.url} variant="caption">
                            {resource.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        ),
    },
    {
        id: "af1",
        summary: "Assistance for Adults",
        content: (
            <List>
                {adultLegalAid.map(resource => (
                    <ListItem key={resource.name}>
                        <Link target="_blank" rel="noopener noreferrer" href={resource.url} variant="caption">
                            {resource.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        ),
    },
    {
        id: "af2",
        summary: "Assistance for Juveniles",
        content: (
            <List>
                {juvenileLegalAid.map(resource => (
                    <ListItem key={resource.name}>
                        <Link target="_blank" rel="noopener noreferrer" href={resource.url} variant="caption">
                            {resource.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        ),
    },
];
const LegalAidServices = () => {
    return (
        <>
            <Grid container>
                {aidFacts.map(fact => (
                    <Grid key={fact.id} item xs={12} sm={6} md={4}>
                        <FactExpandMoreCard summary={fact.summary} content={fact.content} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default LegalAidServices;
