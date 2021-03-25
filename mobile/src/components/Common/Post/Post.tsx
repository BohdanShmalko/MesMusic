import React, { FC, useState } from "react";
import { View } from "react-native";
import { navigationType, PostType } from "../../../types/types";
import { PostOverlay } from "./PostOverlay";
import { SharePost } from "./SharePost";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { PostLike } from "./PostLike";
import { PostDescription } from "./PostDescription";

type PropType = PostType & { navigation: navigationType };

export const Post: FC<PropType> = ({
  useMenu = false,
  isAdded,
  userUri,
  uris,
  name,
  likeCount,
  description,
  publicationTime,
  isLike,
  navigation,
  isMy = false,
}) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);

  const [shareVisible, setShareVisible] = useState(false);
  const toggleOverlayShare = () => setShareVisible(!shareVisible);

  return (
    <View
      style={{
        marginBottom: 20,
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      }}
    >
      <View>
        <PostHeader
          name={name}
          userUri={userUri}
          publicationTime={publicationTime}
          useMenu={useMenu}
          toggleOverlay={toggleOverlay}
          navigation={navigation}
        />
        <PostContent uris={uris} />
        <PostLike
          isLike={isLike}
          isAdded={isAdded}
          toggleOverlayShare={toggleOverlayShare}
          navigation={navigation}
        />
        <PostDescription
          name={name}
          LikeCount={likeCount}
          urisLength={uris.length}
          description={description}
        />
      </View>
      <PostOverlay
        visible={visible}
        toggleOverlay={toggleOverlay}
        isMy={isMy}
        navigation={navigation}
      />
      <SharePost visible={shareVisible} toggleOverlay={toggleOverlayShare} />
    </View>
  );
};
