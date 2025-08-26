'use client';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import LinkSharp from "@mui/icons-material/LinkSharp";

export default function University({ name, webpage, domain, alpha_two_code }: { name: string, webpage: string, domain: string, alpha_two_code: string }) {
  return (
    <Box maxWidth="500px" marginTop="10px">
      <Card>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
            {name}
          </Typography>
          <Typography variant="body2">
            Domain: {domain}
          </Typography>
          <Typography variant="body2">
            Alpha two code: {alpha_two_code}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={webpage} underline="hover">
            <LinkSharp fontSize="small"/>
            {webpage}
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
