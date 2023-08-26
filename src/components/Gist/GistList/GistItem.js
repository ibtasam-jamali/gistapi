import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

function GistItem({ gist }) {
  return (
    <Item>
      <Header>
        <User>
          <UserImage src={gist.owner.avatar_url} alt={gist.owner.login} />
          <UserName>{gist.owner.login}</UserName>
        </User>
        <Stats>
          <Stat>
            <Octicon style={{ marginRight: "6px" }} name="code" />{" "}
            {Object.keys(gist.files).length}
          </Stat>
          <Stat>
            <Octicon style={{ marginRight: "6px" }} name="repo-forked" />{" "}
            {gist.forks ? gist.forks.length : 0}
          </Stat>
          <Stat>
            <Octicon style={{ marginRight: "6px" }} name="comment-discussion" />{" "}
            {gist.comments}
          </Stat>
          <Stat>
            <Octicon style={{ marginRight: "6px" }} name="star" /> {gist.stars}{" "}
            Stars
          </Stat>
        </Stats>
      </Header>
      <SubHeader>
        Created: {new Date(gist.created_at).toLocaleDateString()} | Updated:{" "}
        {new Date(gist.updated_at).toLocaleDateString()}
      </SubHeader>
      <Description>{gist.description}</Description>
      <Footer>
        {Object.keys(gist.files).map((fileName, index) => (
          <FileIcon key={index}>
            <Octicon style={{ marginRight: "6px" }} name="file" /> {fileName}
          </FileIcon>
        ))}
      </Footer>
    </Item>
  );
}

const Item = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e1e4e8;
  padding: 16px 16px 40px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

const UserName = styled.div`
  font-weight: bold;
  color: #0969da;
`;

const Stats = styled.div`
  display: flex;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 14px;
  color: #0969da;
  font-weight: bold;
`;

const SubHeader = styled.p`
  margin-bottom: 12px;
  font-size: 12px;
  color: #586069;
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FileIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  font-size: 12px;
  color: #0969da;
  font-weight: bold;
  margin-left: 10px;
`;

export default GistItem;
