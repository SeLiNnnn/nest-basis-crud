/**
 *  程序出Bug了？
 *        ∩∩
 *      （´･ω･）
 *     ＿| ⊃／(＿＿_
 *    ／ └-(＿＿＿／
 *    ￣￣￣￣￣￣￣
 *   算了反正不是我写的
 *      ⊂⌒／ヽ-、＿
 *    ／⊂_/＿＿＿＿ ／
 *    ￣￣￣￣￣￣￣
 * @Author: SeLiNnnn
 * @Description: Codes create the world.
 * @Date: 2021-04-09 11:26
 */

import { Document } from 'mongoose';
export interface User extends Document {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}
