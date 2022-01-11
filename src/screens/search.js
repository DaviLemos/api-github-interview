// * REACT * //
import React, { useEffect, useState } from 'react';
// * Components * //
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import { Avatar, Logo } from '../components/image/Images';
// * Typography * //
import { H1, H2, H3, P } from '../components/typography/Typography';
// * Boxes * //
import { FlexBox } from '../components/box/Boxes';
// * List * //
import { List, Item } from '../components/list/List';
// * Axios Functions * //
import { userProfile, repository, starred } from '../api/API';

const Search = () => {
  const [gitUser, setGitUser] = useState();
  const [gitRepository, setGitRepository] = useState();
  const [gitStarred, setGitStarred] = useState();
  const [gitUserProfile, setGitUserProfile] = useState();
  const [change, setChange] = useState(true);

  const handleInput = (e) => {
    setGitUser(e.target.value);
  };

  const handleSearch = () => {
    if (gitUser) {
      userProfile(gitUser)
        .then(function (res) {
          const user = {
            id: res.id,
            avatar: res.avatar_url,
            name: res.name,
            login: res.login,
            repos: res.public_repos,
            followers: res.followers,
            following: res.following,
            url: res.html_url,
          };
          setGitUserProfile(user);
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
        });
    }
  };

  const handleRepository = () => {
    if (gitUser) {
      repository(gitUser)
        .then(function (res) {
          const repos = res.map((data) => {
            return { id: data.id, name: data.name, url: data.html_url };
          });
          setChange(true);
          setGitRepository(repos);
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
        });
    }
  };

  const handleStarred = () => {
    if (gitUser) {
      starred(gitUser)
        .then(function (res) {
          const repos = res.map((data) => {
            return { id: data.id, name: data.name, url: data.html_url };
          });
          setChange(false);
          setGitStarred(repos);
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
        });
    }
  };

  return (
    <div>
      <FlexBox
        direction="column"
        align="center"
        justify="center"
        background="#777"
        padding="10px 0"
      >
        <H1 margin="10px 0 0" color="white">
          {' '}
          Git Profile Search{' '}
        </H1>
        <Input
          width="250px"
          height="30px"
          text="Username"
          size="16px"
          margin="20px"
          radius="30px"
          border="none"
          padding="10px 15px"
          onChange={handleInput}
          onBlur={handleSearch}
        />
        <FlexBox align="center" justify="center">
          <Button
            background="#FF7A00"
            color="white"
            text="Repository"
            padding="10px 20px"
            width="60%"
            size="16px"
            margin="10px"
            radius="10px"
            onClick={handleRepository}
          />
          <Button
            background="#FF7A00"
            color="white"
            text="Starred"
            padding="10px 20px"
            width="60%"
            size="16px"
            margin="10px"
            radius="10px"
            onClick={handleStarred}
          />
        </FlexBox>
      </FlexBox>
      {gitUserProfile && (
        <FlexBox direction="column" align="center" margin="0 0 10px">
          <Avatar
            width="120px"
            height="120px"
            margin="20px auto"
            url={gitUserProfile.avatar}
            alt="Github User Avatar"
          />
          <H2>
            {gitUserProfile.name}{' '}
            <a href={gitUserProfile.url} target="_blank">
              <Logo
                width="20px"
                height="20px"
                src="https://github.com/fluidicon.png"
                alt="Logo Github"
              />
            </a>
          </H2>
          <FlexBox>
            <P margin="0 6px">{gitUserProfile.repos} Repositories</P>

            <P margin="0 6px">{gitUserProfile.followers} Followers</P>

            <P margin="0 6px">{gitUserProfile.following} Following</P>
          </FlexBox>
        </FlexBox>
      )}

      {change
        ? gitRepository && (
            <FlexBox
              direction="column"
              align="center"
              border="2px solid #231024"
              borderRadius="10px"
            >
              <H3 margin="20px 0 10px">Repositories</H3>
              <div style={{ width: '95%' }}>
                <List>
                  {gitRepository.length !== 0 ? (
                    gitRepository.map((repos) => (
                      <Item key={repos.id}>
                        <FlexBox align="center">
                          <a href={repos.url} target="_blank">
                            <Logo
                              width="20px"
                              height="20px"
                              src="https://github.com/fluidicon.png"
                              alt="Logo Github"
                            />
                          </a>
                          <P margin="2px 0 3px 2px"> {repos.name} </P>
                        </FlexBox>
                      </Item>
                    ))
                  ) : (
                    <FlexBox align="center" justify="center">
                      <P>No Repository</P>
                    </FlexBox>
                  )}
                </List>
              </div>
            </FlexBox>
          )
        : gitStarred && (
            <FlexBox
              direction="column"
              align="center"
              border="2px solid #231024"
              borderRadius="10px"
            >
              <H3 margin="20px 0 10px">Starreds</H3>
              <div style={{ width: '95%' }}>
                <List>
                  {gitStarred.length !== 0 ? (
                    gitStarred.map((repos) => (
                      <Item key={repos.id}>
                        <FlexBox align="center">
                          <a href={repos.url} target="_blank">
                            <Logo
                              width="20px"
                              height="20px"
                              src="https://github.com/fluidicon.png"
                              alt="Logo Github"
                            />
                          </a>
                          <P margin="2px 0 3px 2px"> {repos.name} </P>
                        </FlexBox>
                      </Item>
                    ))
                  ) : (
                    <FlexBox align="center" justify="center">
                      <P>No Starred</P>
                    </FlexBox>
                  )}
                </List>
              </div>
            </FlexBox>
          )}
    </div>
  );
};

export default Search;
