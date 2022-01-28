import {
  List,
  ListItem,
  Grid,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { Email, HomeWorkOutlined, Call } from "@material-ui/icons";
import { useResourcesStyles } from "../Styles/useResourcesStyles";
import { ExternalLink } from "../ui-kit/ExternalLink";
import { ListItemLink } from "../ui-kit/ListItemLink";

const HousingFinderList = ({ resources }) => {
  const classes = useResourcesStyles();
  return (
    <List dense>
      {resources.map((contact, idx) => (
        <ListItem key={idx}  divider>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography>
                <ExternalLink href={contact.url}>{contact.name}</ExternalLink>
              </Typography>
              <br />
              <Typography variant="body2">{contact.desc}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List dense>
                {contact.address && (
                  <ListItemLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${contact.name}+${contact.address}+${contact.city}`}
                  >
                    <HomeWorkOutlined className={classes.shelterIcon} />
                    <ListItemText
                      primary={contact.address + " " + contact.city}
                    />
                  </ListItemLink>
                )}
                {contact.phone && (
                  <ListItemLink href={`tel:+${contact.phone}`}>
                    {contact.tags2Phones && <Typography>{contact.tags2Phones[0]}</Typography>}
                    <Call className={classes.shelterIcon} />
                    <ListItemText primary={contact.phone} />
                  </ListItemLink>
                )}
                {contact.phone2 && (
                  <ListItemLink href={`tel:+${contact.phone2}`}>
                    {contact.tags2Phones && <Typography>{contact.tags2Phones[1]}</Typography>}
                    <Call className={classes.shelterIcon} />
                    <ListItemText primary={contact.phone2} />
                  </ListItemLink>
                )}
                {contact.email && (
                  <ListItemLink href={`mailto:${contact.email}`}>
                    <Email className={classes.shelterIcon} />{" "}
                    <ListItemText primary={contact.email} />
                  </ListItemLink>
                )}
              </List>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default HousingFinderList;
