import { DefaultBodyType, PathParams, rest } from 'msw';

import {
  InfoResponse,
  VersionResponse,
} from '@/docker/services/system.service';

export const dockerHandlers = [
  rest.get<DefaultBodyType, PathParams, InfoResponse>(
    '/api/endpoints/:endpointId/docker/info',
    (req, res, ctx) => res(ctx.json({}))
  ),
  rest.get<DefaultBodyType, PathParams, VersionResponse>(
    '/api/endpoints/:endpointId/docker/version',
    (req, res, ctx) => res(ctx.json({ ApiVersion: '1.24' }))
  ),
];
