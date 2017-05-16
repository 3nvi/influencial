import React from 'react';
import { Grid, Cell } from 'react-mdl';

function PrivacyPolicy() {
  return (
    <Grid>
      <Cell col={12}>
        <h1>Data privacy policy</h1>
        <p>
          InfluenCial does not require user log-in and uses only publicly available data.
          We do not retrieve or store information that is not shown in the application.
          We retrieve and analyze content (only text) publicly posted in social media in order to
          extract hashtag mentions and we do not require any explicit permission from the Instagram
          user level.
          <br />
          <br />
          We also retrieve and store, for certain social media users, the following information,
          when available:
          <ul>
            <li>
              name
            </li>
            <li>
              country
            </li>
            <li>
              number of posts
            </li>
            <li>
              followers
            </li>
            <li>
              image url
            </li>
          </ul>
          and we make sure to keep this information up to date. If at any point You (a proven social
          media account owner) do not want your information displayed as a result of the
          platform, please send us an email at &nbsp;
          <a target="_blank" href="mailto:support@influencial.com">support@influencial.com</a> &nbsp;
          and we will make sure to exclude all sorts of publicly accessible social media information
          about your account from our website.
        </p>
      </Cell>
    </Grid>
  );
}

export default PrivacyPolicy;
