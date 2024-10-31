FROM liferay/node-runner:latest

COPY --chown=liferay:liferay client-extensions/node-js /opt/liferay

ENV LIFERAY_ROUTES_DXP=/opt/liferay/dxp-metadata

# Expose port 3001
EXPOSE 3001

RUN npm install