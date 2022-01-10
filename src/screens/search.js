// * REACT * //
import React, { useEffect, useState } from 'react';
// * Components * //
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import { Avatar } from '../components/image/Images';
// * Typography * //
import { H1, H2 } from '../components/typography/Typography';
// * Boxes * //
import {
  FlexBox,
  RowBox,
  SearchBox,
  ProfileBox,
} from '../components/box/Boxes';
// * Axios Functions * //
import { userProfile, repository, starred } from '../api/API';

const Search = () => {
  const [gitUser, setGitUser] = useState();
  const [gitRepository, setGitRepository] = useState();
  const [gitStarred, setGitStarred] = useState();
  const [gitUserProfile, setGitUserProfile] = useState();

  const handleInput = (e) => {
    setGitUser(e.target.value);
  };

  const handleSearch = () => {
    if (gitUser) {
      userProfile(gitUser)
        .then(function (res) {
          console.log('Sucess');
          console.log(res);
          const user = {
            avatar: res.avatar_url,
            name: res.name,
            login: res.login,
            repos: res.public_repos,
            followers: res.followers,
            following: res.following,
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
          console.log('Sucess');
          console.log(res);
          const repos = res.map((data) => {
            return { id: data.id, name: data.name, url: data.html_url };
          });

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
          console.log('Sucess');
          console.log(res);
          const repos = res.map((data) => {
            return { id: data.id, name: data.name, url: data.html_url };
          });
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
      <FlexBox>
        <SearchBox>
          <H1> Git Profile Search </H1>
          <Input
            text="Username"
            size="medium"
            margin="20px"
            radius="30px"
            onChange={handleInput}
            onBlur={handleSearch}
          />
          <RowBox>
            <Button
              background="#fb9800"
              text="Repository"
              padding="10px 20px"
              width="60%"
              size="16px"
              margin="10px"
              radius="10px"
              onClick={handleRepository}
            />
            <Button
              background="#ffc600"
              text="Starred"
              padding="10px 20px"
              width="60%"
              size="16px"
              margin="10px"
              radius="10px"
              onClick={handleStarred}
            />
          </RowBox>
        </SearchBox>
      </FlexBox>
      {gitUserProfile && (
        <FlexBox>
          <ProfileBox>
            <Avatar url={gitUserProfile.avatar} alt="" />
            <H2>{gitUserProfile.name}</H2>
            <RowBox>
              <div>
                <p>{gitUserProfile.repos} Repositories</p>
              </div>
              <div>
                {' '}
                <p>{gitUserProfile.followers} Followers</p>
              </div>
              <div>
                <p>{gitUserProfile.following} Following</p>
              </div>
            </RowBox>
          </ProfileBox>
        </FlexBox>
      )}
      {gitRepository && (
        <FlexBox>
          <ul>
            {gitRepository.map((repos) => (
              <li key={repos.id}>{repos.name}</li>
            ))}
          </ul>
        </FlexBox>
      )}
      {gitStarred && (
        <FlexBox>
          <ul>
            {console.log(gitStarred)}
            {gitStarred.map((repos) => (
              <li key={repos.id}>{repos.name}</li>
            ))}
          </ul>
        </FlexBox>
      )}
      {/* {gitUserProfile && <Avatar url={gitUserProfile.avatar} alt="" />} */}
    </div>
  );
};

export default Search;
