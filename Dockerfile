ARG NODE_IMAGE_TAG
FROM node:$NODE_IMAGE_TAG

# パッケージ更新
RUN apt-get update

# パラメータ変数
ARG USERNAME
ARG GROUPNAME
ARG UID
ARG GID
ARG WORKDIR
ARG TIMEZONE

# ユーザー情報変更
RUN groupmod -g $GID node
RUN groupmod -n $GROUPNAME node
RUN usermod -u $UID node
RUN usermod -l $USERNAME node

# すべてのファイルをnodeユーザーのものに
RUN mkdir -p $WORKDIR
RUN chown -R $GID:$UID $WORKDIR

# ユーザー切り替え
USER $USERNAME

# 作業ディレクトリ変更
WORKDIR $WORKDIR

# 情報として
EXPOSE 3000