// * REACT * //
import React, { useEffect, useState } from 'react';
// * Components * //
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import Image from '../components/image/Image';
// * Typography * //
import { H1, H2, H3, P } from '../components/typography/Typography';
// * Boxes * //
import FlexBox from '../components/box/Box';
// * List * //
import { List, Item } from '../components/list/List';
// * Axios Functions * //
import { userProfile, repository, starred } from '../api/API';

const Search = () => {
  const [user, setUser] = useState('');
  const [gitUser, setGitUser] = useState();
  const [gitRepository, setGitRepository] = useState();
  const [gitStarred, setGitStarred] = useState();
  const [gitUserProfile, setGitUserProfile] = useState();
  const [change, setChange] = useState(true);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({
    profile: '',
    repos: '',
    starred: '',
  });

  const getLocalStorageUser = (key, setState) => {
    let usersStorage = JSON.parse(localStorage.getItem('gitusers'));

    if (
      usersStorage &&
      Object.keys(usersStorage).includes(gitUser) &&
      Object.keys(usersStorage[gitUser]).includes(key)
    ) {
      setState(usersStorage[gitUser][key]);
      return usersStorage[gitUser][key];
    }
  };

  const setLocalStorageUser = (userData, key) => {
    let usersStorage = JSON.parse(localStorage.getItem('gitusers'));
    if (
      !usersStorage ||
      !Object.keys(usersStorage).includes(gitUser) ||
      !Object.keys(usersStorage[gitUser]).includes(key)
    ) {
      !usersStorage && (usersStorage = {});
      !usersStorage[gitUser] && (usersStorage[gitUser] = {});
      usersStorage[gitUser][key] = userData;
      localStorage.setItem('gitusers', JSON.stringify(usersStorage));
    }
    return usersStorage[gitUser][key];
  };

  const compareData = (localData, apiData) => {
    console.log(JSON.stringify(localData) === JSON.stringify(apiData));
    return JSON.stringify(localData) === JSON.stringify(apiData);
  };

  const updateLocalData = () => {
    console.log(updateData);
    setUpdate(false);

    let user = JSON.parse(localStorage.getItem('gitusers'));

    if (updateData.profile) {
      setGitUserProfile(updateData.profile);
      user[gitUser].profile = updateData.profile;
    }
    if (updateData.repos) {
      setGitRepository(updateData.repos);
      user[gitUser].repos = updateData.repos;
    }
    if (updateData.starred) {
      setGitStarred(updateData.starred);
      user[gitUser].starred = updateData.starred;
    }
    localStorage.setItem('gitusers', JSON.stringify(user));
    setUpdateData({ ...updateData, profile: '', repos: '', starred: '' });
  };

  const handleInput = (e) => {
    setGitUser(e.target.value);
  };

  const handleSearch = () => {
    if (gitUser) {
      setLoading(true);
      setGitUserProfile();
      setGitRepository();
      setGitStarred();
      let profile = getLocalStorageUser('profile', setGitUserProfile);
      profile && setLoading(false);
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
          if (!profile) {
            profile = setLocalStorageUser(user, 'profile');
            setGitUserProfile(profile);
          } else {
            if (!compareData(profile, user)) {
              setUpdate(true);
              setUpdateData({ ...updateData, profile: user });
            }
          }
          // ;
          setGitRepository();
          setGitStarred();
          setLoading(false);
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
          setLoading(false);
          setGitUserProfile('');
        });
    }
  };

  const handleRepository = () => {
    if (gitUser) {
      setLoading(true);
      setChange(true);
      let repositories = getLocalStorageUser('repos', setGitRepository);
      repositories && setLoading(false);
      repository(gitUser)
        .then(function (res) {
          const repos = res.map((data) => {
            return { id: data.id, name: data.name, url: data.html_url };
          });
          if (!repositories) {
            repositories = setLocalStorageUser(repos, 'repos');
            setGitRepository(repositories);
          } else {
            if (!compareData(repositories, repos)) {
              setUpdate(true);
              setUpdateData({ ...updateData, repos: repos });
            }
          }
          // setGitStarred();
          setLoading(false);
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
        });
    }
  };

  const handleStarred = () => {
    if (gitUser) {
      setLoading(true);
      setChange(false);
      let star = getLocalStorageUser('starred', setGitStarred);
      star && setLoading(false);
      starred(gitUser)
        .then(function (res) {
          const repos = res.map((data) => {
            return { id: data.id, name: data.name, url: data.html_url };
          });
          if (!star) {
            star = setLocalStorageUser(repos, 'starred');
            setGitStarred(star);
          } else {
            if (!compareData(star, repos)) {
              setUpdate(true);
              setUpdateData({ ...updateData, starred: repos });
            }
          }
          setLoading(false);
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
        });
    }
  };

  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <FlexBox height="100vh" direction="column" testid="search-screen">
      <FlexBox
        direction="column"
        align="center"
        justify="center"
        background="#777"
        padding="10px 0"
        height={loading || gitUserProfile !== undefined ? '' : '100vh'}
      >
        {user ? (
          <FlexBox justify="center" align="center" testid="search-header">
            <Image
              borderRadius="30px"
              width="60px"
              height="60px"
              margin="20px auto"
              alt="Github User Avatar"
              src={user.avatar}
              rotate={false ? true : false}
              testid="header-avatar"
            />
            <H2 margin="0 10px" color="white">
              {user.name}
            </H2>{' '}
            <Image
              width="50px"
              height="50px"
              onClick={logout}
              src="https://img.icons8.com/color/48/000000/in-app-messaging.png"
              alt="Logout"
              cursor="pointer"
              rotate={false ? true : false}
              testid="logout-icon"
            />
          </FlexBox>
        ) : (
          <Image
            src="https://img.icons8.com/material-outlined/24/000000/loading-sign.png"
            width="30px"
            height="30px"
            rotate={true ? true : false}
          />
        )}

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
          testid="search-input"
        />

        <FlexBox align="center" justify="center">
          <Button
            background="#ff8a65"
            color="white"
            text="Repository"
            padding="10px 20px"
            width="60%"
            size="16px"
            margin="10px"
            radius="10px"
            onClick={handleRepository}
            testid="repository-button"
          />
          <Button
            background="#ff8a65"
            color="white"
            text="Starred"
            padding="10px 20px"
            width="60%"
            size="16px"
            margin="10px"
            radius="10px"
            onClick={handleStarred}
            testid="starred-button"
          />
        </FlexBox>
      </FlexBox>

      {gitUserProfile ? (
        <FlexBox direction="column" align="center" margin="0 0 10px">
          <Image
            testid="git-profile-image"
            borderRadius="50%"
            width="120px"
            height="120px"
            margin="20px auto"
            src={gitUserProfile.avatar}
            alt="Github User Avatar"
            rotate={false ? true : false}
          />
          {update && (
            <Button
              background="#00ccff"
              color="white"
              text="Update Data"
              padding="10px 20px"
              width="150px"
              size="16px"
              margin="0px 0px 20px"
              radius="10px"
              onClick={updateLocalData}
            />
          )}
          <H2>
            {gitUserProfile.name}{' '}
            <a href={gitUserProfile.url} target="_blank">
              <Image
                width="20px"
                height="20px"
                src="https://github.com/fluidicon.png"
                alt="Logo Github"
                cursor="pointer"
                rotate={false ? true : false}
              />
            </a>
          </H2>
          <FlexBox>
            <P margin="0 6px">{gitUserProfile.repos} Repositories</P>

            <P margin="0 6px">{gitUserProfile.followers} Followers</P>

            <P margin="0 6px">{gitUserProfile.following} Following</P>
          </FlexBox>
        </FlexBox>
      ) : (
        gitUserProfile === '' && (
          <FlexBox align="center" justify="center" margin="20px 0 0">
            <H2>User not Found</H2>
          </FlexBox>
        )
      )}

      {loading && (
        <FlexBox justify="center" align="center" margin="10px">
          <Image
            src="https://img.icons8.com/material-outlined/24/000000/loading-sign.png"
            width="30px"
            height="30px"
            rotate={true ? true : false}
          />
        </FlexBox>
      )}

      {change
        ? gitRepository && (
            <FlexBox
              direction="column"
              align="center"
              border="2px solid #231024"
              borderRadius="10px"
              testid="repository-list"
            >
              <H3 margin="20px 0 10px">Repositories</H3>
              <div style={{ width: '95%' }}>
                <List>
                  {gitRepository.length !== 0 ? (
                    gitRepository.map((repos) => (
                      <Item key={repos.id}>
                        <FlexBox align="center">
                          <a href={repos.url} target="_blank">
                            <Image
                              width="20px"
                              height="20px"
                              src="https://github.com/fluidicon.png"
                              alt="Logo Github"
                              cursor="pointer"
                              rotate={false ? true : false}
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
              testid="starred-list"
            >
              <H3 margin="20px 0 10px">Starreds</H3>
              <div style={{ width: '95%' }}>
                <List>
                  {gitStarred.length !== 0 ? (
                    gitStarred.map((repos) => (
                      <Item key={repos.id}>
                        <FlexBox align="center">
                          <a href={repos.url} target="_blank">
                            <Image
                              width="20px"
                              height="20px"
                              src="https://github.com/fluidicon.png"
                              alt="Logo Github"
                              cursor="pointer"
                              rotate={false ? true : false}
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
    </FlexBox>
  );
};

export default Search;
