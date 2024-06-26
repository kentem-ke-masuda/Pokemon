import { server } from './src/mocks/node'
import { beforeAll, afterAll, afterEach } from 'vitest'

// テストの前にサーバーを起動
beforeAll(() => server.listen())

// 各テスト後にサーバーのリクエストハンドラをリセット
afterEach(() => server.resetHandlers())

// テストの後にサーバーを停止
afterAll(() => server.close())