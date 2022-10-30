export interface UserDeleteRepository {
    delete(id: number): Promise<void>;
}